import * as React from "react";
import { Button } from "./components/ui/button";
import { CarouselDemo } from "./components/demo/CarouselDemo";
import { CalendarDemo } from "./components/demo/CalendarDemo";
import { CheckboxDemo } from "./components/demo/CheckboxDemo";
import { AvatarDemo } from "./components/demo/AvatarDemo";
import { CardWithForm } from "./components/demo/CardWithForm";
import { InputDemo } from "./components/demo/inputDemo";

function App() {
  return (
    <>
      <div className="px-20">
        <CarouselDemo></CarouselDemo>
        <Button>Click Here</Button>
      </div>
      <CalendarDemo></CalendarDemo>
      <CheckboxDemo></CheckboxDemo>
      <AvatarDemo></AvatarDemo>
      <CardWithForm></CardWithForm>
      <InputDemo></InputDemo>
    </>
  );
}

export default App;
