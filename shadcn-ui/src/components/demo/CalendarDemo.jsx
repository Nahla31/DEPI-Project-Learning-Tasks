import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
("use client");

export function CalendarDemo() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="flex justify-center items-center ">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
