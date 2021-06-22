import PageLayout from "../components/PageLayout";
import {useContext, useEffect} from "react";
import SessionContext from "../util/SessionContext";
import {useRouter} from "next/router";


export default function Home() {
    const {userProfile} = useContext(SessionContext)
    const router = useRouter();

    useEffect(() => {
        if(userProfile.uid != undefined){
            router.push("/dashboard")
        } else {
            console.log("user not logged in")
        }
    })

    return (
        <PageLayout title="Welcome to Moody">
            <div className="h-screen flex justify-center items-center px-12 bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Moody</h1>
                    <h2 className="text-2xl text-gray-700 mb-12">Your emotional support buddy</h2>
                </div>
            </div>
        </PageLayout>
    )
}
