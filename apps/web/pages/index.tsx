import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>My Webpage</h1>
      <Button onClick={() => console.log("oi")} />
    </div>
  );
}
