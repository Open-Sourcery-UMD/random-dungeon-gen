import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Dashboard() {
    return (
        <div className="w-full flex flex-col justify-center gap-10 p-10">
            <Card className="w1/2 p-5">
                <CardHeader>
                    <CardTitle>Welcome!</CardTitle>
                    <CardDescription>
                        This is the dashboard where you can access and manage all of your current projects.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
