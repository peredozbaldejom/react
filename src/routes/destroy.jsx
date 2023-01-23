import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    await deleteContact(params.contanctId);
    console.log({ params });
    return redirect("/");
}

