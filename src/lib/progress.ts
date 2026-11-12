import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CourseId } from "@/lib/curriculum";
import { todayKey, yesterdayKey } from "@/lib/dates";

export type LessonRecord = {
  correct: number;
  total: number;
  perfect: boolean;
};

export type ThemeId = "claro" | "noite" | "papel";

type State = {
  name: string;
  onboarded: boolean;
  courseId: CourseId;
  xp: number;
  dailyXp: number;
  dailyDate: string;
  goal: number;
  streak: number;
  bestStreak: number;
  lastActive: string | null;
  hearts: number;
  heartsDate: string;
  sound: boolean;
  theme: ThemeId;
  practiced: Record<string, boolean>;
  completed: Record<string, LessonRecord>;
  mistakes: string[];
  answered: number;
  correctAnswers: number;
  activeDays: string[];
  pendingTrain: boolean;
  rollDay: () => void;
  finishOnboarding: (name: string, courseId: CourseId) => void;
  setCourse: (courseId: CourseId) => void;
  setName: (name: string) => void;
  setGoal: (goal: number) => void;
  toggleSound: () => void;
  setTheme: (theme: ThemeId) => void;
  markPractice: (lessonId: string) => number;
  recordAnswer: (key: string, ok: boolean, costHeart: boolean) => void;
  completeLesson: (lessonId: string, correct: number, total: number) => number;
  finishTrain: (correct: number) => number;
  requestTrain: () => void;
  consumeTrain: () => void;
  resetProgress: () => void;
};

const initial = {
  name: "",
  onboarded: false,
  courseId: "js" as CourseId,
  xp: 0,
  dailyXp: 0,
  dailyDate: "",
  goal: 40,
  streak: 0,
  bestStreak: 0,
  lastActive: null as string | null,
  hearts: 5,
  heartsDate: "",
  sound: true,
  theme: "claro" as ThemeId,
  practiced: {} as Record<string, boolean>,
  completed: {} as Record<string, LessonRecord>,
  mistakes: [] as string[],
  answered: 0,
  correctAnswers: 0,
  activeDays: [] as string[],
  pendingTrain: false,
};

function withActivity(
  state: Pick<State, "streak" | "bestStreak" | "lastActive" | "activeDays" | "dailyXp" | "dailyDate" | "xp">,
  gained: number,
) {
  const today = todayKey();
  let streak = state.streak;
  let lastActive = state.lastActive;
  let bestStreak = state.bestStreak;
  const activeDays = state.activeDays.slice();
  if (lastActive !== today) {
    streak = lastActive === yesterdayKey() ? streak + 1 : 1;
    lastActive = today;
    bestStreak = Math.max(bestStreak, streak);
    if (!activeDays.includes(today)) activeDays.push(today);
  }
  return {
    xp: state.xp + gained,
    dailyXp: state.dailyDate === today ? state.dailyXp + gained : gained,
    dailyDate: today,
    streak,
    bestStreak,
    lastActive,
    activeDays: activeDays.slice(-60),
  };
}

export const useProgress = create<State>()(
  persist(
    (set, get) => ({
      ...initial,
      rollDay: () => {
        const state = get();
        const today = todayKey();
        const patch: Partial<State> = {};
        if (state.heartsDate !== today) {
          patch.hearts = 5;
          patch.heartsDate = today;
        }
        if (state.dailyDate !== today) {
          patch.dailyXp = 0;
          patch.dailyDate = today;
        }
        if (state.lastActive && state.lastActive < yesterdayKey() && state.streak !== 0) {
          patch.streak = 0;
        }
        if (Object.keys(patch).length > 0) set(patch);
      },
      finishOnboarding: (name, courseId) => set({ name: name.trim(), courseId, onboarded: true }),
      setCourse: (courseId) => set({ courseId }),
      setName: (name) => set({ name: name.trim() }),
      setGoal: (goal) => set({ goal }),
      toggleSound: () => set({ sound: !get().sound }),
      setTheme: (theme) => set({ theme }),
      markPractice: (lessonId) => {
        const state = get();
        if (state.practiced[lessonId]) return 0;
        const gained = 12;
        set({
          ...withActivity(state, gained),
          practiced: { ...state.practiced, [lessonId]: true },
        });
        return gained;
      },
      recordAnswer: (key, ok, costHeart) => {
        const state = get();
        const mistakes = state.mistakes.filter((item) => item !== key);
        if (!ok) mistakes.unshift(key);
        set({
          answered: state.answered + 1,
          correctAnswers: state.correctAnswers + (ok ? 1 : 0),
          hearts: costHeart && !ok ? Math.max(0, state.hearts - 1) : state.hearts,
          mistakes: mistakes.slice(0, 40),
        });
      },
      completeLesson: (lessonId, correct, total) => {
        const state = get();
        const perfect = total > 0 && correct === total;
        const prev = state.completed[lessonId];
        const gained = prev ? correct * 3 : correct * 10 + (perfect ? 15 : 0);
        set({
          ...withActivity(state, gained),
          hearts: Math.min(5, state.hearts + 1),
          completed: {
            ...state.completed,
            [lessonId]: {
              correct: Math.max(prev?.correct ?? 0, correct),
              total,
              perfect: Boolean(prev?.perfect) || perfect,
            },
          },
        });
        return gained;
      },
      finishTrain: (correct) => {
        const state = get();
        const gained = correct * 6;
        const today = todayKey();
        set({
          ...withActivity(state, gained),
          hearts: 5,
          heartsDate: today,
        });
        return gained;
      },
      requestTrain: () => set({ pendingTrain: true }),
      consumeTrain: () => set({ pendingTrain: false }),
      resetProgress: () => {
        const state = get();
        set({
          ...initial,
          name: state.name,
          courseId: state.courseId,
          sound: state.sound,
          theme: state.theme,
          onboarded: true,
        });
      },
    }),
    { name: "sharptech-academy-v1" },
  ),
);

export function useStoreHydrated() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (useProgress.persist.hasHydrated()) {
      setReady(true);
      return;
    }
    return useProgress.persist.onFinishHydration(() => setReady(true));
  }, []);
  return ready;
}

