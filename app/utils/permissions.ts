export type CargoType =
  | 'presidente'
  | 'vice-presidente'
  | 'secretario'
  | 'diretor-esportes'
  | 'diretor-patrimonio'
  | 'diretor-marketing'
  | 'designer'

export type Permission =
  | 'atletas:read'
  | 'atletas:write'
  | 'estoque:read'
  | 'estoque:write'
  | 'fotos:write'
  | 'conquistas:read'
  | 'conquistas:write'
  | 'modalidades:read'
  | 'modalidades:write'
  | 'usuarios:write'
  | 'eleicao:read'
  | 'eleicao:write'

// Tabela de permissões por cargo (doc: docs/docs-nexus.md)
const permissionsMap: Record<CargoType, Permission[]> = {
  'presidente': [
    'atletas:read', 'atletas:write',
    'estoque:read', 'estoque:write',
    'fotos:write',
    'conquistas:read', 'conquistas:write',
    'modalidades:read', 'modalidades:write',
    'usuarios:write',
    'eleicao:read', 'eleicao:write',
  ],
  'vice-presidente': [
    'atletas:read', 'atletas:write',
    'estoque:read', 'estoque:write',
    'fotos:write',
    'conquistas:read', 'conquistas:write',
    'modalidades:read', 'modalidades:write',
    'eleicao:read',
  ],
  'secretario': [
    'atletas:read', 'atletas:write',
    'estoque:read',
    'modalidades:read',
    'eleicao:read',
  ],
  'diretor-esportes': [
    'atletas:read',
    'fotos:write',
    'conquistas:read', 'conquistas:write',
    'modalidades:read', 'modalidades:write',
  ],
  'diretor-patrimonio': [
    'atletas:read',
    'estoque:read', 'estoque:write',
  ],
  'diretor-marketing': [
    'atletas:read',
    'estoque:read',
    'fotos:write',
    'conquistas:read',
    'modalidades:read',
  ],
  'designer': [
    'fotos:write',
  ],
}

export function hasPermission(cargo: CargoType, perm: Permission): boolean {
  return permissionsMap[cargo]?.includes(perm) ?? false
}

export function getPermissions(cargo: CargoType): Permission[] {
  return permissionsMap[cargo] ?? []
}
