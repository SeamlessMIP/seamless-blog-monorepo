
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { TreatmentOption } from "@/types/consultation";

interface TreatmentSelectionProps {
  treatmentOptions: TreatmentOption[];
  selectedTreatments: string[];
  onSelectionChange: (id: string) => void;
}

const TreatmentSelection = ({ 
  treatmentOptions, 
  selectedTreatments, 
  onSelectionChange 
}: TreatmentSelectionProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-medium">Pick a primary treatment area</Label>
        <p className="text-sm text-gray-500 mt-1">Where would you like to start?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {treatmentOptions.map(option => (
          <div key={option.id} className="flex items-center space-x-2">
            <Checkbox 
              id={option.id} 
              checked={selectedTreatments.includes(option.id)}
              onCheckedChange={() => onSelectionChange(option.id)}
              className="border-orange-300 text-orange-600 focus-visible:ring-orange-500"
            />
            <Label 
              htmlFor={option.id} 
              className="text-gray-700 cursor-pointer"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentSelection;
