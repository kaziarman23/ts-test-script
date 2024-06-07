export default function Call(val: string): boolean {
    console.log("I am ts console and my name is: ", val);
    const isMe: boolean = true;
    console.log(isMe);
    return isMe;
}
const name: string = "Arman";

Call(name);
