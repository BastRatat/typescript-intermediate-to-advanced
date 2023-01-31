import { Practitioner, Client } from 'utility';

abstract class Administrator<ProfileType extends Practitioner | Client> {
  protected profileType: ProfileType

  abstract getAdminPrivilegies(profileType: ProfileType): string[]
}
