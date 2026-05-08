//needed a way to make making localstorage keys not feel very flimsy
export const StorageKeys = {
  Create: {
    NAME: 'create.name',
    SUMMARY: 'create.summary',
    VISIBILITY: 'create.visibility'
  },
  Platforms: {
    MODRINTH: 'platforms.modrinth',
    CURSEFORGE: 'platforms.curseforge',
  }
} as const;

export type StorageKey = typeof StorageKeys[keyof typeof StorageKeys];
