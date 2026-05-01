"use client";
import { GitHubCalendar } from 'react-github-calendar';

const selectLastThreeMonths = (contributions: any[]) => {
  const now = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(now.getMonth() - 3);

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    return date >= threeMonthsAgo && date <= now;
  });
};

export default function GithubCalendarWrapper() {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <GitHubCalendar
        username="thelaplo"
        blockSize={35}
        blockMargin={25}
        fontSize={14}
        colorScheme="dark"
        transformData={selectLastThreeMonths}
        showWeekdayLabels={true}
        labels={{
          totalCount: "{{count}} contributions ces 3 derniers mois",
        }}
        theme={{
          dark: ['#161b22', '#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa'],
        }}
      />
    </div>
  );
}