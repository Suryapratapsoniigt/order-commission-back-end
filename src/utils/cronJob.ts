import { CronJob } from 'cron';
import { fetchAndStoreOrders } from '../services/shopifyServices';

export function startCronJob() {
  const job = new CronJob('*/1 * * * *', async () => {
    try {
      await fetchAndStoreOrders();
      console.log('Data fetched and stored successfully');
    } catch (error) {
      console.error('Error in scheduled data fetch:', error);
    }
  });

  job.start();
}