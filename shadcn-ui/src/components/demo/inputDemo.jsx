import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div className="w-full flex justify-center">
      <Input
        type="email"
        placeholder="Email"
        className="w-1/2 mt-20 mb-20" // 50% width and 20px left margin
      />
    </div>
  );
}
