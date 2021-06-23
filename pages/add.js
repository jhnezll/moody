import React, {useState} from "react";
import StepOne from "../components/EntryForum/StepOne";
import StepTwo from "../components/EntryForum/StepTwo";
import StepThree from "../components/EntryForum/StepThree";
import StepSendToDatabase from "../components/EntryForum/StepSendToDatabase";

export default function Add(){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [formData, setFormData] = useState({
        emotion: '',
        score: '',
        title: '',
        entry: '',
        date: new Date(),
    })

    const onContinue = (event) => {
        event.preventDefault()
        setCurrentStepIndex(prevState => ++prevState)
        console.log(formData)
    }

    const steps = [
        //Step 1
        {
            title: "How are you feeling?",
            content: <StepOne
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
            />
        },
        // Step 2
        {
            title: "Why do you feel " + formData.emotion,
            content: <StepTwo
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
                onBack={() => setCurrentStepIndex(0)}
            />
        },
        // Step 3
        {
            title: formData.title,
            content: <StepThree
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
                onBack={() => setCurrentStepIndex(1)}
            />
        },
        // Step 4, Send data to database
        {
            title: "",
            content: <StepSendToDatabase
                currentStep={currentStepIndex}
                onContinue={onContinue}
                formData={formData}
                setFormData={setFormData}
                onBack={() => setCurrentStepIndex(2)}
            />
        },
    ]

    const currentStep = steps[currentStepIndex]

    return(
        <div className="h-screen flex justify-center items-center md:bg-gray-50">
            <div className="p-8 md:border border-gray-200 rounded-lg md:shadow-lg max-w-xl w-full text-left bg-white">
                <h1 className="text-4xl font-bold text-center text-gray-900">{currentStep.title}</h1>
                <div className="mt-8">
                    {currentStep.content}
                </div>
            </div>
        </div>
    )
}