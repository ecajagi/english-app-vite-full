
import { Brain } from "lucide-react";

export default function GoodToKnow() {
  return (
    <div className="p-6 bg-blue-50 text-blue-900">
      <div className="flex items-center mb-4">
        <Brain className="w-6 h-6 mr-2 text-blue-700" />
        <h1 className="text-3xl font-bold">Good to Know</h1>
      </div>
      <p>Discover useful tips and tricks to improve your English skills.</p>
    </div>
  );
}
