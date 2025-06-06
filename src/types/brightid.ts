interface Impact {
  evaluator: string
  score: number
  confidence: number
  impact: number
  level?: number
}

interface Category {
  name: string
  score: number
  level: number
  impacts: Impact[]
}

interface Domain {
  name: string
  categories: Category[]
}

export interface Verification {
  name: string
  block: number
  timestamp: number
  domains?: Domain[]
  rank?: number
  connected?: string[]
  communities?: string[]
  reported?: string[]
  hash?: string
  linksNum?: number
  confirmedScore?: number
  score?: number
  directReports?: Record<string, any>
  indirectReports?: Record<string, any>
  reportedConnections?: Record<string, any>
  releaseTime?: number
}

interface RecoveryConnection {
  id: string
  isActive: boolean
  activeBefore: number
  activeAfter: number
}

interface Profile {
  id: string
  sponsored: boolean
  verifications: Verification[]
  recoveryConnections: RecoveryConnection[]
  connectionsNum: number
  groupsNum: number
  reports: string[]
  createdAt: number
  signingKeys: string[]
  requiredRecoveryNum: number
}

export interface BrightID {
  data: Profile
}
