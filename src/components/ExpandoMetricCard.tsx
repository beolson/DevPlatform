import * as Icons from "@/components/Icons";
import styles from './ExpandoMetricCard.module.scss'


interface IMetricCardProps {
  title: string;
  value: number;
  units: string;

  increasePercent: number;
}
const ExpandoMetricCard = (props: IMetricCardProps) => {
  return (
    <div className={styles.metric_card}>
      <div
        className=" rounded-lg bg-white px-4 py-5 shadow sm:p-6"
        
      >
        <div className="text-base font-normal text-gray-900">{props.title}</div>
        <div className="mt-1 flex items-baseline justify-between md:block lg:flex">
          <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
            {props.value}
            <span className="ml-2 text-sm font-medium text-gray-500">
              {props.units}
            </span>
          </div>

          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
            <Icons.UpArrow />
            <span className="sr-only"> Increased by </span>
            {props.increasePercent}%
          </div>
        </div>
      </div>

      {props.increasePercent === 3 && (
        <div className={`${styles.expando_metric_card} rounded-lg bg-white px-4 py-5 shadow sm:p-6`} >
          <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
            {props.value}
            <span className="ml-2 text-sm font-medium text-gray-500">
              {props.units}
            </span>
          </div>

          <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
            <Icons.UpArrow />
            <span className="sr-only"> Increased by </span>
            {props.increasePercent}%
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandoMetricCard;
