import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Project({ name, description }) {
    return (
        <Card className="w-1/6 p-5 h-75">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    );
}