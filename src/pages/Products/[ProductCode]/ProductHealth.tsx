import ProductsLayout from "@/components/ProductsLayout";
import * as Icons from "@/components/Icons";
import MetricCard from "@/components/MetricCard";
import ExpandoMetricCard from "@/components/ExpandoMetricCard";
import { useState } from "react";

const ProjectHealth = () => {
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
          Product Health
        </h3>

        <dl className="flex flex-wrap flex-row">
          <ExpandoMetricCard
            onClick={() => toggleExpanded("MilesOfRoad")}
            expanded={expandedCard === "MilesOfRoad"}
            title="Miles of Road Built"
            Measurements={[
              {
                units: "Miles",
                value: 100,
              },
            ]}
          ><div>Hello</div></ExpandoMetricCard>
          <MetricCard
            title="Active Montly Users"
            Measurements={[{ units: "Users", value: 30 }]}
          />
        </dl>
      </div>
    </ProductsLayout>
  );
};

export default ProjectHealth;
