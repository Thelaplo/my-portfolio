"use client";
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalendarWrapper() {
  return (
    <GitHubCalendar
      username="thelaplo"
      blockSize={13}
      blockMargin={5}
      colorScheme="dark"
      theme={{
        dark: ['#161b22', '#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa'],
      }}
    />
  );
}