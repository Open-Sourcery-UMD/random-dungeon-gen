import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Project } from "@/components/project";
import { getDocs, collection } from "firebase/firestore"; 
import { useState, useEffect } from "react";
import { db, auth } from "@/App.jsx";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const [projects, setProjects] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            if(auth.currentUser == null) return;
            const uid = auth.currentUser.uid;
            const querySnapshot = await getDocs(collection(db, `users/${uid}/projects`));
            setProjects(querySnapshot);
        }
        fetchProjects();
    }, []);
    
    function getProjects() {
        console.log(projects);
        if(projects == null || projects.docs.length == 0) return (
            <div className="w-full flex justify-center items-center gap-10 p-10">
                <Card className="w-100 p-5">
                    <CardHeader>
                        <CardTitle>No Projects Found</CardTitle>
                        <CardDescription>
                            You don't have any projects yet. Create one to get started!
                        </CardDescription>

                        <div className="h-20 flex flex-col items-center justify-end gap-5 mt-5">
                            <Button className="w-3/4" onClick={() => navigate("/create-project")}>
                                Create First Project
                            </Button>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        );

        return (
            <div className="w-full flex justify-center flex-wrap gap-10 p-10">
                {projects.docs.map((project) => (
                    <Project key={project.id} name={project.data().title} description={project.data().description} />
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
                    <div className="w-full flex flex-row items-end justify-between gap-5">
                        <CardTitle>Projects</CardTitle>

                        <Button className="w-50" onClick={() => navigate("/create-project")}>
                            Create New Project
                        </Button>
                    </div>
                </CardHeader>

                {getProjects()}
            </Card>
        </div>
    );
}
