import * as Icons from "@/components/Icons";
import styles from "./ExpandoMetricCard.module.scss";

interface IMetricCardProps {
  title: string;

  Measurements: Array<{ value: number; units: string }>;
}
const MetricCard = (props: IMetricCardProps) => {
  return (
    <div className={styles.metric_card}>
      <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt className="text-base font-normal text-gray-900">{props.title}</dt>
        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
          {props.Measurements.map((m) => (
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {m.value}
              <span className="ml-2 text-sm font-medium text-gray-500">
                {m.units}
              </span>
            </div>
          ))}
        </dd>
      </div>
    </div>
  );
};

export default MetricCard;
