export interface CoranReminderSource {
  surahName: string;
  surahNumber: number;
  verseNumber: string | number;
}

export interface HadithReminderSource {
  collection: string;
  hadithNumber?: string | number;
  grading?: string;
}

interface BaseReminder {
  id: number;
  french: string;
  arabic?: string;
}

export interface CoranReminder extends BaseReminder {
  type: 'coran';
  source: CoranReminderSource;
}

export interface HadithReminder extends BaseReminder {
  type: 'hadith';
  source: HadithReminderSource;
}

export type Reminder = CoranReminder | HadithReminder;