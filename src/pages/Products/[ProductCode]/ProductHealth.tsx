import ProductsLayout from "@/components/ProductsLayout";
import * as Icons from "@/components/Icons";
import MetricCard from "@/components/MetricCard";
import ExpandoMetricCard from "@/components/ExpandoMetricCard";

const ProjectHealth = () => {
  return (
    <ProductsLayout>
      <div className="p-6">
        <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-1 md:divide-y-0 md:divide-x">
          <MetricCard title="Product Health" increasePercent={12} units="" value={12} />

        </dl>

        <h3 className="text-lg font-medium leading-6 text-gray-900 pt-6">
          6 Months Average
        </h3>
        <dl className="" style={{display: "flex", flexFlow: "row wrap", padding:  15}}>
          {/* <MetricCard title="Monthly Active Users" increasePercent={12} units="" value={30} />

          <MetricCard title="Miles of Road Built" increasePercent={12} units="Miles" value={100} /> */}

          {Array.from(Array(10).keys()).map((item, i) => {return (
            <ExpandoMetricCard key={i} title="Miles of Road Built" increasePercent={i} units="Miles" value={100} />
          )
          
        })}
        </dl>
      </div>
    </ProductsLayout>
  );
};

export default ProjectHealth;
