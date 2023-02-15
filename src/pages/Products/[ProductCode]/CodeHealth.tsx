import ProductsLayout from "@/components/ProductsLayout";
import MetricCard from "@/components/MetricCard";
import ExpandoMetricCard from "@/components/ExpandoMetricCard";
import { useState } from "react";

const CodeHealth = () => {
  const [expandedCard, setExpandedCard] = useState<string | undefined>();

  const toggleExpanded = (key: string) => {
    if (expandedCard === key) {
      setExpandedCard(undefined);
    } else {
      setExpandedCard(key);
    }
  };

  return (
    <ProductsLayout>
      <div className="p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900 pt-6">
          Code Health
        </h3>

        <dl className="flex flex-wrap flex-row">
          <ExpandoMetricCard
            onClick={() => toggleExpanded("MilesOfRoad")}
            expanded={expandedCard === "MilesOfRoad"}
            title="Lint Issues"
            Measurements={[
              {
                units: "Issues",
                value: 0,
              },
            ]}
          ><div>Hello</div></ExpandoMetricCard>
          <MetricCard
            title="Code Analysis Issues"
            Measurements={[{ units: "Issues", value: 30 }]}
          />
          <MetricCard
            title="Foundation Component Usage"
            Measurements={[{ units: "Components", value: 30 }]}
          />
        </dl>
      </div>
    </ProductsLayout>
  );
};

export default CodeHealth;
