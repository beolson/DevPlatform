import ExpandoMetricCard from "@/components/ExpandoMetricCard";
import MetricTable, { IMetricTableProps } from "@/components/MetricTable";
import ProductsLayout from "@/components/ProductsLayout";
import { useState } from "react";

const queryTableData: IMetricTableProps<{ time: string; database: string; query: string }> = {
  columns: [
    {
      title: "Time",
      objectKey: "time",
      wrap: false,
    },
    {
      title: "Database",
      objectKey: "database",
      wrap: false,
    },
    {
      title: "Query",
      objectKey: "query",
      wrap: true,
    },
  ],
  data: [
    { time: "Jan 4, 2024 @3:04:34 PM", database: "prod-01", 
    query: `SELECT DISTINCT Name FROM Production.Product WHERE
    ProductModelID IN (SELECT ProductModelID FROM
      Production.ProductModel AS pm WHERE p.ProductModelID =
      pm.ProductModelID AND Name LIKE );` },

  ],
};

const logTableData: IMetricTableProps<{ time: string; server: string; level: string, message: string }> = {
  columns: [
    {
      title: "Time",
      objectKey: "time",
      wrap: false,
    },
    {
      title: "Server",
      objectKey: "server",
      wrap: false,
    },
    {
      title: "Level",
      objectKey: "level",
      wrap: false,
    },{
      title: "Message",
      objectKey: "message",
      wrap: true,
    },
  ],
  data: [
    { time: "Jan 4, 2024 @3:04:34 PM", server: "prod-01", level:"Error",
    message: `Check the render method of  See
    https://reactjs.org/link/warning-keys for more
    information. 
    at ProductsLayout
    (webpack-internal:///./src/components/ProductsLayout.tsx:58:74)
    at ProjectHealth
    at App
    (webpack-internal:///./src/pages/_app.tsx:12:11)
    at PathnameContextProviderAdapter
    (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:62:11)
    at ErrorBoundary
    (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:301:63)
    at ReactDevOverlay
    (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:850:919)
    at Container
    (webpack-internal:///./node_modules/next/dist/client/index.js:62:1)
    at AppContainer
    (webpack-internal:///./node_modules/next/dist/client/index.js:172:11)
    at Root
    (webpack-internal:///./node_modules/next/dist/client/index.js:347:11)` },

  ],
};
//

const InfrastructureHealth = () => {
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
          Infrastructure Health
        </h3>

        <dl className="flex flex-wrap flex-row">


          <ExpandoMetricCard
            title="Long Running Queries"
            onClick={() => toggleExpanded("queries")}
            expanded={expandedCard === "queries"}
            Measurements={[
              {
                units: "Querys > 5 seconds",
                value: 6,
              },
            ]}
          >
            <MetricTable
              columns={queryTableData.columns}
              data={queryTableData.data}
            ></MetricTable>
          </ExpandoMetricCard>

          <ExpandoMetricCard
            title="Log"
            onClick={() => toggleExpanded("log")}
            expanded={expandedCard === "log"}
            Measurements={[
              {
                units: "Error",
                value: 6,
              },
              {
                units: "Warn",
                value: 6,
              },
            ]}
          >
            <MetricTable
              columns={logTableData.columns}
              data={logTableData.data}
            ></MetricTable>
          </ExpandoMetricCard>

          <ExpandoMetricCard
            title="End of Life Resources"
            onClick={() => toggleExpanded("eol")}
            expanded={expandedCard === "eol"}
            Measurements={[
              {
                units: "Retiring Azure Resources",
                value: 3,
              }
            ]}
          >
            <MetricTable
              columns={logTableData.columns}
              data={logTableData.data}
            ></MetricTable>
          </ExpandoMetricCard>

          <ExpandoMetricCard
            title="Cloud Compliance"
            onClick={() => toggleExpanded("compliance")}
            expanded={expandedCard === "compliance"}
            Measurements={[
              {
                units: "Non-Compliant Resources",
                value: 3,
              }
            ]}
          >
            <MetricTable
              columns={logTableData.columns}
              data={logTableData.data}
            ></MetricTable>
          </ExpandoMetricCard>
        </dl>
      </div>


    </ProductsLayout>
  );
};

export default InfrastructureHealth;
