import Section from "./layout/Section";
import Card from "./ui/Card";

function Objectives() {
    return (
        <Section title="Objecitves & Impact" bg="bg-green-50">
            <div className="grid md:grid-cols-3 gap-8">
                <Card title="Energy Efficiency">
                    Promote adoption of energy-efficient lighting technologies.
                </Card>

                <Card title="Capacity Building">
                    Strengthen academic and technical skills in clean energy.
                </Card>

                <Card title="Sustainability">
                    Support Zambia's clean energy transition goals.
                </Card>
            </div>
        </Section>
        
    );
}

export default Objectives;