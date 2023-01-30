import { Practitioner, Client } from 'utility'

// DOMAIN SPECIFIC WAY
export function userTypeGuard(userType: Client | Practitioner): userType is Practitioner {
  return (userType as Practitioner).hasSpecialRights
}

// GENERIC WAY
export function isOfLeftType<LeftType extends object, RightType extends object>(
  object: LeftType | RightType,
  leftTypeKey: keyof LeftType,
): object is LeftType {
  return (object as LeftType).hasOwnProperty(leftTypeKey)
}

export function canOpenSupportTicket(userType: Client | Practitioner) {
  const isOfTypePractitioner = isOfLeftType<Practitioner, Client>(userType, 'hasSpecialRights')
  if (isOfTypePractitioner) {
    // DO STUFFS
  } else {
    // DO STUFFS
  }
  return isOfTypePractitioner
}

// TO SUM-UP
// - type guarding is super useful when dealing with DRY components/services
// - you can keep navigating through the correct object after compilation
// - if you see union types coming along as function/constructor parameters, you may have fucked up in your code design
// - you might have to check a property in a deep object and implement a recursive version of your type guard
// - you can implement domain-specific type guards or use a generic in your project

