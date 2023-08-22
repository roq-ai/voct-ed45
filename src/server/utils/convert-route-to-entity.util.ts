const mapping: Record<string, string> = {
  companies: 'company',
  feedbacks: 'feedback',
  forms: 'form',
  invitations: 'invitation',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
