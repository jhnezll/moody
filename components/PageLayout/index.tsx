import React, {ReactElement, useContext, useEffect} from "react";
import SessionContext from "../../util/SessionContext";
import Button from "../forms/Button";
import {useRouter} from "next/router";
import fb from "../../util/firebase-config";
import Head from "next/head";
import {BottomNavigation, BottomNavigationAction, Link} from "@material-ui/core";
import {AddBox, Book, Timeline} from "@material-ui/icons";

interface Props {
    children: ReactElement;
    privateRoute?: boolean;
    redirectPath?: string;
    content?: any
    title: string;
}

const RedirectHome = () => {
    const router = useRouter()

    useEffect(() => {
        router.push('/')
    }, [])

    return <></>
}

const PageLayout: React.FC<Props> = ({children, privateRoute, title, redirectPath}) => {

    const router = useRouter()
    const {isAuthenticated, userProfile} = useContext(SessionContext)

    if (privateRoute && !isAuthenticated) return <RedirectHome/>

    function signOut() {
        fb.auth().signOut()
            .then(() => router.push('/'))
    }


    return <div>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <div className="w-full">
            <div className="h-1 bg-gradient-to-r from-teal-400 to-blue-600"/>
            <div className="flex justify-between py-2.5 px-4 shadow-md items-center bg-white">
                <a href="/"
                   className="flex justify-between items-center font-medium text-lg focus:underline truncate">
                    Moody
                </a>
                <div className="items-center">
                    {isAuthenticated ? <Button sizes="md" variant="filled" onClick={signOut}>Sign out</Button> :
                        <span className="space-x-2">
                    <Button onClick={() => router.push('/auth/signin')} sizes="md" variant="light">Log in</Button>
                    <Button onClick={() => router.push('/auth/signup')} sizes="md" variant="filled">Sign up</Button>
                </span>}
                </div>

            </div>
        </div>
        <footer>
            <div className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                {isAuthenticated ?
                    <BottomNavigation showLabels>
                        <Link href={"/dashboard"}>
                                <BottomNavigationAction label="Journal" icon={<Book/>}/>
                        </Link>
                        <Link href={"/add"}>
                            <BottomNavigationAction label="Add" icon={<AddBox/>}/>
                        </Link>

                        <Link href={"/timeline"}>
                            <BottomNavigationAction label="Timeline" icon={<Timeline/>}/>
                        </Link>

                    </BottomNavigation>
                : null
                }
            </div>
        </footer>

        {children}
    </div>


}

export default PageLayout