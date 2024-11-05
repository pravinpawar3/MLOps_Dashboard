import { Link } from 'react-router-dom';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';
import UserFive from '../../images/user/user-05.png';

// Update the alertData to include the corresponding avatars
const alertData = [
  {
    avatar: UserOne,
    name: 'Devid Heilo',
    text: 'User has created a new model.',
    timestamp: '2024-11-04T10:00:00Z',
    textCount: 0,
    color: '#10B981',
  },
  {
    avatar: UserTwo,
    name: 'Henry Fisher',
    text: 'User has updated the model.',
    timestamp: '2024-11-04T10:05:00Z',
    textCount: 0,
    color: '#DC3545',
  },
  {
    avatar: UserThree,
    name: 'Jhon Doe',
    text: 'User has added new data.',
    timestamp: '2024-11-04T10:20:00Z',
    textCount: 0,
    color: '#10B981',
  },
  {
    avatar: UserFour,
    name: 'Jane Doe',
    text: 'User has created a new dataset.',
    timestamp: '2024-11-04T10:25:00Z',
    textCount: 0,
    color: '#FFBA00',
  },
  {
    avatar: UserFive,
    name: 'Jhon Doe',
    text: 'User has updated a model.',
    timestamp: '2024-11-04T10:30:00Z',
    textCount: 0,
    color: '#10B981',
  },
  {
    avatar: UserThree,
    name: 'Jhon Doe',
    text: 'User has deleted an outdated model.',
    timestamp: '2024-11-04T10:35:00Z',
    textCount: 0,
    color: '#FFBA00',
  },
];

const Alerts = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Alerts
      </h4>

      <div>
        {alertData.map((alert, key) => {
          // Format the timestamp to a readable date
          const alertDate = new Date(alert.timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const alertTime = new Date(alert.timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <Link
              to="/"
              className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
              key={key}
            >
              <div className="relative h-14 w-14 rounded-full overflow-hidden">
                <img src={alert.avatar} alt="User" className="h-full w-full rounded-full" />
              </div>

              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className="font-medium text-black dark:text-white">
                    {alert.name}
                  </h5>
                  <p>
                    <span className="text-sm text-black dark:text-white">
                      {alert.text}
                    </span>
                    <span className="text-xs"> . {alertDate} at {alertTime}</span>
                  </p>
                </div>
                {alert.textCount !== 0 && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <span className="text-sm font-medium text-white">
                      {alert.textCount}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Alerts;
