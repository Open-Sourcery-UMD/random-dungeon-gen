import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Project({ name, description }) {
    return (
        <Card className="w-75 p-5 h-75">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <div className="flex h-full flex-col items-center justify-end gap-5 mt-5">
                <Button className="w-3/4">Edit</Button>
            </div>
        </Card>
    );
}