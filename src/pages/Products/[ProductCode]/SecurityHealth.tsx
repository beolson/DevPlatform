import ExpandoMetricCard from "@/components/ExpandoMetricCard";
import MetricCard from "@/components/MetricCard";
import MetricTable, { IMetricTableProps } from "@/components/MetricTable";
import ProductsLayout from "@/components/ProductsLayout";
import { useState } from "react";

const securityTableData: IMetricTableProps<{status: string, title: string, rank: string}> = {
  columns: [{
    title: "Status",

    objectKey: "status"
  },
  {
    title: "Title",

    objectKey: "title"
  },
{
  title: "Rank",
  objectKey: "rank"
}],
  data: [
      {status: "Open",  rank: "High", title: "SQL Injection" },
      {status: "Open",  rank: "Medium", title: "Security Misconfiguration" },
      {status: "Open",  rank: "Low", title: "Server Side Request Forgery" },
]
}

const SecurityHealth = () => {
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
          Security Issues <span className="text-indigo-600 pl-4 text-xs font-normal"><a href="#" >Open In Checkmarx</a></span>
        </h3>
        <dl className="flex flex-wrap flex-row">
        <ExpandoMetricCard
            title="Security Issues"
            onClick={() => toggleExpanded("security")}
          expanded={expandedCard === "security"}
            Measurements={[
              {
                units: "High",
                value: 6,
              },
              {
                units: "Medium",
                value: 6,
              },
              {
                units: "Low",
                value: 6,
              },
            ]}
            ><MetricTable columns={securityTableData.columns} data={securityTableData.data}></MetricTable></ExpandoMetricCard>

        </dl>

       
      </div>
    </ProductsLayout>
  );
};

export default SecurityHealth;
