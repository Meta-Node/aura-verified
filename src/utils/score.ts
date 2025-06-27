import { userBrightId } from '@/states/user'
import { EvaluationCategory } from './aura'
import { getSubjectVerifications } from './subject'

// https://hackmd.io/optceo8uQpOW0NqGJjYTag
// Level 1
// Score: 10M+
// Evaluations: one low+ confidence evaluation from one level 1+ player
// Level 2
// Score: 50M+
// Evaluations: one medium+ confidence evaluation from one level 1+ player
// Level 3
// Score: 100M+
// Evaluations: one high+ confidence evaluation from one level 2+ player OR two medium confidence evaluations from two level 2+ players
// Level 4
// Score: 150M+
// Evaluations: one high+ confidence evaluation from one level 3+ player OR two medium confidence evaluations from two level 3+ players

export const getLevelupProgress = async ({
  evaluationCategory
}: {
  evaluationCategory: EvaluationCategory
}) => {
  const subjectId = userBrightId.get()
  const profileQuery = await getSubjectVerifications(subjectId, evaluationCategory)
  const { auraLevel, auraScore, auraImpacts } = profileQuery

  if (evaluationCategory !== EvaluationCategory.SUBJECT) {
    throw new Error('Evaluation category is only supported for subject for now')
  }

  let requirements: { reason: string; status: 'passed' | 'needs passing'; level: number }[] = []
  let percent = 0
  let isUnlocked = false

  // Level 1
  if (auraLevel === 1) {
    // Score requirement
    if (auraScore && auraScore >= 10000000) {
      requirements.push({
        reason: 'Score of 10M+ for levelup',
        status: 'passed',
        level: 2
      })
      // If user has enough score but still level 1, evaluation is missing
      requirements.push({
        reason: 'One low+ confidence evaluation from one level 1+ player',
        status: 'needs passing',
        level: 2
      })
    } else {
      requirements.push({
        reason: 'Score of 10M+ for levelup',
        status: 'needs passing',
        level: 2
      })
    }

    percent = Math.round(
      (requirements.filter((r) => r.status === 'passed').length / requirements.length) * 100
    )
    isUnlocked = requirements.every((r) => r.status === 'passed')
    return { isUnlocked, percent, requirements }
  }

  // Level 2
  if (auraLevel === 2) {
    if (auraScore && auraScore >= 50000000) {
      requirements.push({
        reason: 'Score of 50M+ for levelup',
        status: 'passed',
        level: 3
      })
    } else {
      requirements.push({
        reason: 'Score of 50M+ for levelup',
        status: 'needs passing',
        level: 3
      })
    }
    requirements.push({
      reason: 'One medium+ confidence evaluation from one level 1+ player',
      status: 'needs passing',
      level: 3
    })
    percent = Math.round(
      (requirements.filter((r) => r.status === 'passed').length / requirements.length) * 100
    )
    isUnlocked = requirements.every((r) => r.status === 'passed')
    return { isUnlocked, percent, requirements }
  }

  // Level 3
  if (auraLevel === 3) {
    if (auraScore && auraScore >= 100000000) {
      requirements.push({
        reason: 'Score of 100M+ for levelup',
        status: 'passed',
        level: 4
      })
    } else {
      requirements.push({
        reason: 'Score of 100M+ for levelup',
        status: 'needs passing',
        level: 4
      })
    }
    requirements.push({
      reason:
        'One high+ confidence evaluation from one level 2+ player OR two medium confidence evaluations from two level 2+ players',
      status: 'needs passing',
      level: 4
    })
    percent = Math.round(
      (requirements.filter((r) => r.status === 'passed').length / requirements.length) * 100
    )
    isUnlocked = requirements.every((r) => r.status === 'passed')
    return { isUnlocked, percent, requirements }
  }

  // Level 4
  if (auraLevel === 4) {
    if (auraScore && auraScore >= 150000000) {
      requirements.push({
        reason: 'Score of 150M+ for levelup',
        status: 'passed',
        level: 5
      })
    } else {
      requirements.push({
        reason: 'Score of 150M+ for levelup',
        level: 5,
        status: 'needs passing'
      })
    }
    requirements.push({
      reason:
        'One high+ confidence evaluation from one level 3+ player OR two medium confidence evaluations from two level 3+ players',
      level: 5,
      status: 'needs passing'
    })
    percent = Math.round(
      (requirements.filter((r) => r.status === 'passed').length / requirements.length) * 100
    )
    isUnlocked = requirements.every((r) => r.status === 'passed')
    return { isUnlocked, percent, requirements }
  }

  return {
    isUnlocked: true,
    percent: 100,
    requirements: []
  }
}
