import React, {useState} from "react";
import Steps from "./Steps";
import TextInput from "../forms/TextInput";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";
import {Button, Chip, createMuiTheme, MuiThemeProvider, TextField} from "@material-ui/core";
import Theme from "../../styles/MuiTheme";

export default function StepThree({currentStep, onContinue, onBack, formData, setFormData}) {

    return (
        <MuiThemeProvider theme={Theme}>
            <form onSubmit={onContinue}>
                <div className="space-y-4 p-2" autoComplete="off">

                    {/*Description*/}
                    <div>
                        <h1>{formData.entry}</h1>
                    </div>

                    {/*Emotion*/}
                    <div className="space-y-2 pt-2">
                        <Chip label={formData.emotion} variant="outlined"/>
                    </div>

                </div>

                {/*Bottom of Forum*/}
                <div className="flex justify-between items-center mt-10">
                    <Steps step={currentStep + 1} totalSteps={3}/>
                    <div className="flex justify-between space-x-2">
                        {/*<button type="button" onClick={onBack}*/}
                        {/*        className="inline-flex items-center text-gray-700 px-4 py-2 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">*/}
                        {/*    Back*/}
                        {/*</button>*/}
                        {/*<button type="submit"*/}
                        {/*        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium*/}
                        {/*rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none*/}
                        {/*focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">*/}
                        {/*    Continue*/}
                        {/*</button>*/}
                        <Button onClick={onBack}>Back</Button>
                        <Button type="submit" variant="contained" color="primary" disableElevation>Submit</Button>
                    </div>
                </div>
            </form>
        </MuiThemeProvider>
    )
}