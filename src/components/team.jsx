import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: "https://via.placeholder.com/150",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "https://via.placeholder.com/150",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <div className="mt-4 space-x-2">
                <Button variant="outline" size="icon">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;