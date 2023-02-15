import * as Icons from "@/components/Icons";
import { ReactNode } from "react";
import styles from './ExpandoMetricCard.module.scss'


interface IMetricCardProps {
  title: string;
  
  Measurements: Array<{ value?: number; units: string }>;
  expanded?: boolean;
  children: ReactNode;
  onClick: () => void;
}
const ExpandoMetricCard = (props: IMetricCardProps) => {
  return (
    <div className={styles.metric_card} onClick={props.onClick}>
      <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt className="text-base font-normal text-gray-900">{props.title}</dt>
        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
          {props.Measurements.map((m) => (
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              {m.value && m.value}
              <span className="ml-2 text-sm font-medium text-gray-500">
                {m.units}
              </span>
            </div>
          ))}
        </dd>
      </div>

      {props.expanded && (
        <div className={`${styles.expando_metric_card} rounded-lg bg-white  shadow sm:p-6 mt-8`} >
          {props.children}
        </div>
      )}
    </div>
  );
};

export default ExpandoMetricCard;
