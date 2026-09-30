import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Project } from "@/components/project";
import { doc, setDoc, updateDoc, getDocs, collection } from "firebase/firestore"; 
import { useState, useEffect } from "react";
import { db, auth } from "@/App.jsx";
import { Button } from "@/components/ui/button";

export function Dashboard() {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            if(auth.currentUser == null) return;
            const querySnapshot = await getDocs(collection(db, "users/" + auth.currentUser.uid + "/projects"));
            setProjects(querySnapshot);
        }
        fetchProjects();
    }, []);
    
    function getProjects() {
        if(!projects) return (
            <div className="w-full flex justify-center items-center gap-10 p-10">
                <Card className="w-100 p-5">
                    <CardHeader>
                        <CardTitle>No Projects Found</CardTitle>
                        <CardDescription>
                            You don't have any projects yet. Create one to get started!
                        </CardDescription>

                        <div className="h-20 flex flex-col items-center justify-end gap-5 mt-5">
                            <Button className="w-3/4">Create First Project</Button>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        );

        return (
            <div className="w-full flex justify-center flex-wrap gap-10 p-10">
                {projects.docs.map((project) => (
                    <Project key={project.id} name={project.data().name} description={project.data().description} />
                ))}
            </div>
        );
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
