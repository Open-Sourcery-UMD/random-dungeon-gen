import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Project } from "@/components/project";

export function Dashboard() {
    function getProjects() {
        return (
            <div className="w-full flex flex-wrap gap-10 p-10">
                <Project name="Test Project" description="This is a test project."/>
                <Project name="Test Project" description="This is a test project."/>
                <Project name="Test Project" description="This is a test project."/>
                <Project name="Test Project" description="This is a test project."/>
                <Project name="Test Project" description="This is a test project."/>
                <Project name="Test Project" description="This is a test project."/>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col justify-center gap-10 p-10">
            <Card className="w-full p-5">
                <CardHeader>
                    <CardTitle>Welcome!</CardTitle>
                    <CardDescription>
                        This is the dashboard where you can access and manage all of your current projects.
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="w-full p-5">
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                </CardHeader>

                {getProjects()}
            </Card>
        </div>
    );
}
