src/
├── main.tsx                           # Entry point
├── App.tsx                            # Root component (simplified)
├── routes/                            # ← NEW: Centralized routing
│   ├── index.tsx                      # Route definitions
│   ├── ProtectedRoute.tsx             # Route guard (role-based)
│   └── routePaths.ts                  # Route constants
│
├── features/                          # ← NEW: Feature modules
│   ├── auth/
│   │   ├── components/
│   │   │   └── LoginPage.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts             # Custom hook wrapping context
│   │   ├── services/
│   │   │   └── authService.ts         # API calls (mock/real)
│   │   └── index.ts                   # Public API barrel export
│   │
│   ├── dashboard/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── components/            # Sub-components
│   │   │   └── admin.css
│   │   ├── curator/
│   │   │   ├── CuratorDashboard.tsx
│   │   │   ├── components/
│   │   │   └── curator.css
│   │   ├── leader/
│   │   │   ├── LeaderDashboard.tsx
│   │   │   ├── components/
│   │   │   └── leader.css
│   │   └── index.ts
│   │
│   ├── leaderboard/
│   │   ├── components/
│   │   │   └── ShanyrakRatingsPage.tsx
│   │   ├── styles/
│   │   │   └── leaderboard.css
│   │   └── index.ts
│   │
│   └── landing/
│       ├── components/
│       │   ├── ShanyrakSection.tsx
│       │   └── AboutSection.tsx
│       ├── LandingPage.tsx
│       └── index.ts
│
├── shared/                            # ← NEW: Shared/common code
│   ├── components/                    # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MainLayout.tsx
│   │   └── ui/                        # Buttons, cards, etc.
│   ├── hooks/                         # Shared hooks
│   │   └── useRole.ts
│   └── styles/
│       └── global.css
│
├── entities/                          # ← NEW: Domain models
│   ├── user/
│   │   ├── model/
│   │   │   └── user.types.ts
│   │   ├── context/
│   │   │   └── UserContext.tsx
│   │   └── index.ts
│   │
│   └── shanyrak/
│       ├── model/
│       │   └── shanyrak.types.ts
│       ├── data/
│       │   └── shanyrakData.ts
│       └── index.ts
│
├── services/                          # ← Renamed: API layer
│   ├── api.ts                         # Axios/fetch config
│   └── mockAuth.ts                    # Mock implementations
│
├── config/                            # App configuration
│   ├── theme.config.ts
│   └── constants.ts
│
├── context/                           # Global providers only
│   └── ConfigContext.tsx
│
├── types/                             # Global shared types
│   └── common.types.ts
│
└── assets/                            # Static assets
    ├── images/
    └── fonts/