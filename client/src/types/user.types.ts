export type UserRole = 'leader' | 'admin' | 'user' | 'curator';

export interface UserProfile {
  id: string;
  fullName: string;     // "Алихан Смаилов"
  email: string;        // "example@example.com"
  shanyrak: string;     // "Алтын"
  className?: string;    // "11 A"
  role: UserRole;
  avatarUrl?: string;
}