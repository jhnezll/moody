import React, {useState} from "react";
import Steps from "./Steps";
import {Button, createMuiTheme, FormControlLabel, MuiThemeProvider, Radio, RadioGroup} from "@material-ui/core";
import Theme from "../../styles/MuiTheme"


export default function StepOne({currentStep, onContinue, formData, setFormData}) {
    return (
        <div>
            <MuiThemeProvider theme={Theme}>
                <form onSubmit={onContinue}>
                    <div className="flex place-content-evenly w-full max-h-12">
                        <Button variant="outlined" color="primary" onClick={event => setFormData({
                            ...formData,
                            emotion: "😭 Terrible",
                            score: 2
                        })} className="rounded-xl">
                            <h3 className="text-black inline-flex">😭 Terrible</h3>
                        </Button>


                        <Button variant="outlined" color="primary" onClick={event => setFormData({
                            ...formData,
                            emotion: "😩 Not Good",
                            score: 4
                        })} className="rounded-xl">
                            <h3 className="text-black inline-flex">😩 Not Good</h3>
                        </Button>

                        <Button variant="outlined" color="primary" onClick={event => setFormData({
                            ...formData,
                            emotion: "✌️ Alright",
                            score: 6,
                        })} className="rounded-xl">
                            <h3 className="text-black inline-flex">✌️ Alright</h3>
                        </Button>

                        <Button variant="outlined" color="primary" onClick={event => setFormData({
                            ...formData,
                            emotion: "😊 Good",
                            score: 8,
                        })} className="rounded-xl">
                            <h3 className="text-black inline-flex">😊 Good</h3>
                        </Button>

                        <Button variant="outlined" color="primary" onClick={event => setFormData({
                            ...formData,
                            emotion: "🤩 Amazing",
                            score: 10
                        })} className="rounded-xl">
                            <h3 className="text-black inline-flex">🤩 Amazing</h3>
                        </Button>
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
                            {/*<Button onClick={onBack}>Back</Button>*/}
                            <Button type="submit" variant="contained" color="primary" disableElevation>Next</Button>
                        </div>
                    </div>
                </form>
            </MuiThemeProvider>
        </div>
    )
}