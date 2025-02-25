const universityRepresentatives = {
  "Harvard University": [
    {
      name: "Leslie Alexander",
      phone_number: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Michael Foster",
      phone_number: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
  ],
  "Stanford University": [
    {
      name: "Dries Vincent",
      phone_number: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
    {
      name: "Lindsay Walton",
      phone_number: "lindsay.walton@example.com",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
  ],
  "MIT": [
    {
      name: "Courtney Henry",
      phone_number: "courtney.henry@example.com",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Tom Cook",
      phone_number: "tom.cook@example.com",
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
  ],
};

export default function VarsityOutreach() {
  return (
    <div className="space-y-12">
      {Object.entries(universityRepresentatives).map(([university, representatives]) => (
        <div key={university}>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{university}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {representatives.map(({ name, phone_number, role, imageUrl, lastSeen, lastSeenDateTime }) => (
              <div
                key={phone_number}
                className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 border border-gray-200"
              >
                <img alt={name} src={imageUrl} className="size-16 rounded-full bg-gray-50 mb-4" />
                <h3 className="text-md font-semibold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
                <p className="text-xs text-gray-400 mt-1">{phone_number}</p>

                <div className="mt-4">
                  {lastSeen ? (
                    <p className="text-xs text-gray-500">
                      Last seen <time dateTime={lastSeenDateTime}>{lastSeen}</time>
                    </p>
                  ) : (
                    <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      Online
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
