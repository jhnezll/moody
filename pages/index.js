import PageLayout from "../components/PageLayout";
import Dropdown from "../components/forms/Dropdown";
import TextInput from "../components/forms/TextInput";

export default function Home() {

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
