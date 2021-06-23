import Steps from "./Steps";
import React, {useContext, useEffect, useState} from "react";
import {CircularProgress, MuiThemeProvider} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";
import fb from "../../util/firebase-config";
import SessionContext from "../../util/SessionContext";
import {useRouter} from "next/router";

const StepSendToDatabase = ({currentStep, onContinue, onBack, formData, setFormData}) => {
    const router = useRouter()
    const {userProfile} = useContext(SessionContext)

    useEffect(() => {
        if (userProfile.uid) {
            fb.firestore().collection(userProfile.uid).doc(formData.title).set({
                emotion: formData.emotion,
                score: formData.score,
                title: formData.title,
                entry: formData.entry,
                date: formData.date
            })
            console.log(userProfile.uid)
            router.push("/dashboard")
        } else {
            console.log("No doc")
        }
    }, [userProfile.uid])


    return(
        <MuiThemeProvider theme={Theme}>
            <div className="flex justify-center items-center -mt-8">
                <div className="text-center space-y-4">
                    <CircularProgress/>
                    <h1><span className="capitalize">Adding entry, {formData.title}</span></h1>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default StepSendToDatabase