import ExpandoMetricCard from "@/components/ExpandoMetricCard";
import MetricCard from "@/components/MetricCard";
import MetricTable, { IMetricTableProps } from "@/components/MetricTable";
import ProductsLayout from "@/components/ProductsLayout";
import { useState } from "react";

const storyTableData: IMetricTableProps<{status: string, title: string}> = {
  columns: [{
    title: "Status",
    objectKey: "status"
  },
  {
    title: "Title",
    objectKey: "title"
  }],
  data: [
      {status: "Open",  title: "Build something good" },
      {status: "Closed",  title: "Build something Better" },
      {status: "In Progress",  title: "Build something Best" },
      {status: "Open",  title: "Build something Wonderful" },
      {status: "Open",  title: "Build something Excelent" }
]
}

const issueTableData: IMetricTableProps<{status: string, title: string}> = {
  columns: [{
    title: "Status",
    objectKey: "status"
  },
  {
    title: "Title",
    objectKey: "title"
  }],
  data: [
      {status: "Open",  title: "This is broken" },
      {status: "Closed",  title: "That is broken" },
      {status: "Open",  title: "May Dog Ran Away" },

]
}

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
          6 Month Dora Metrics
        </h3>
        <dl className="flex flex-wrap flex-row">
          <MetricCard
            title="Deployment Frequency"
            Measurements={[
              {
                units: "Deployments",
                value: 6,
              },
            ]}
          />
          <MetricCard
            title="Time to Restore Service"
            Measurements={[
              {
                units: "Month",
                value: 1,
              },
            ]}
          />
          <MetricCard
            title="Lead Time for Change"
            Measurements={[
              {
                units: "Months",
                value: 2,
              },
            ]}
          />

          <MetricCard
            title="Change Failure Rate"
            Measurements={[
              {
                units: "Issues Per Deployment",
                value: 6,
              },
            ]}
          />
        </dl>

        <h3 className="text-lg font-medium leading-6 text-gray-900 pt-6">
          Work Item Tracking <span className="text-indigo-600 pl-4 text-xs font-normal"><a href="#" >Open In Azure DevOps</a></span>
        </h3>
        <span className="ml-2 text-sm font-medium text-gray-500">
          Sprint 12. March 2, 2023 - March 15, 2023
        </span>
        <dl className="flex flex-wrap flex-row">
          <ExpandoMetricCard
          onClick={() => toggleExpanded("stories")}
          expanded={expandedCard === "stories"}
            title="Stories"
            Measurements={[
              {
                units: "Open",
                value: 6,
              },
              {
                units: "Closed",
                value: 3,
              },
              {
                units: "In Progress",
                value: 12,
              },
            ]}
          ><MetricTable columns={storyTableData.columns} data={storyTableData.data}></MetricTable></ExpandoMetricCard>

          <ExpandoMetricCard
            title="Issues"
            onClick={() => toggleExpanded("issues")}
            expanded={expandedCard === "issues"}
            Measurements={[
              {
                units: "Open",
                value: 6,
              },
              {
                units: "Resolved",
                value: 3,
              }
            ]}
            ><MetricTable columns={issueTableData.columns} data={issueTableData.data}></MetricTable></ExpandoMetricCard>
        </dl>
      </div>
    </ProductsLayout>
  );
};

export default ProjectHealth;
