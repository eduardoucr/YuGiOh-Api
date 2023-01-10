export interface Yugiohcard {
    data: Datum[];
}

export interface Datum {
    id:            number;
    name:          string;
    type:          Type;
    desc:          string;
    atk:           number;
    def:           number;
    level:         number;
    race:          string;
    attribute:     Attribute;
    archetype?:    string;
    card_sets?:    CardSet[];
    card_images:   CardImage[];
    card_prices:   CardPrice[];
    scale?:        number;
    banlist_info?: BanlistInfo;
}

export enum Attribute {
    Water = "WATER",
}

export interface BanlistInfo {
    ban_ocg?:  string;
    ban_goat?: string;
    ban_tcg?:  string;
}

export interface CardImage {
    id:              number;
    image_url:       string;
    image_url_small: string;
}

export interface CardPrice {
    cardmarket_price:   string;
    tcgplayer_price:    string;
    ebay_price:         string;
    amazon_price:       string;
    coolstuffinc_price: string;
}

export interface CardSet {
    set_name:        string;
    set_code:        string;
    set_rarity:      SetRarity;
    set_rarity_code: SetRarityCode;
    set_price:       string;
}

export enum SetRarity {
    Common = "Common",
    DuelTerminalNormalParallelRare = "Duel Terminal Normal Parallel Rare",
    DuelTerminalRareParallelRare = "Duel Terminal Rare Parallel Rare",
    DuelTerminalSuperParallelRare = "Duel Terminal Super Parallel Rare",
    DuelTerminalUltraParallelRare = "Duel Terminal Ultra Parallel Rare",
    GhostRare = "Ghost Rare",
    GoldRare = "Gold Rare",
    GoldSecretRare = "Gold Secret Rare",
    MosaicRare = "Mosaic Rare",
    NormalParallelRare = "Normal Parallel Rare",
    Rare = "Rare",
    SecretRare = "Secret Rare",
    ShatterfoilRare = "Shatterfoil Rare",
    ShortPrint = "Short Print",
    StarfoilRare = "Starfoil Rare",
    SuperRare = "Super Rare",
    UltimateRare = "Ultimate Rare",
    UltraRare = "Ultra Rare",
}

export enum SetRarityCode {
    C = "(C)",
    Dnpr = "(DNPR)",
    Drpr = "(DRPR)",
    Dspr = "(DSPR)",
    Dupr = "(DUPR)",
    Empty = "",
    GScR = "(GScR)",
    Gr = "(GR)",
    Gur = "(GUR)",
    Msr = "(MSR)",
    R = "(R)",
    SP = "(SP)",
    ScR = "(ScR)",
    Sfr = "(SFR)",
    Shr = "(SHR)",
    Sr = "(SR)",
    Ur = "(UR)",
    UtR = "(UtR)",
}

export enum Type {
    EffectMonster = "Effect Monster",
    FlipEffectMonster = "Flip Effect Monster",
    FusionMonster = "Fusion Monster",
    GeminiMonster = "Gemini Monster",
    NormalMonster = "Normal Monster",
    PendulumEffectMonster = "Pendulum Effect Monster",
    PendulumNormalMonster = "Pendulum Normal Monster",
    RitualEffectMonster = "Ritual Effect Monster",
    SpiritMonster = "Spirit Monster",
    SynchroTunerMonster = "Synchro Tuner Monster",
    ToonMonster = "Toon Monster",
    TunerMonster = "Tuner Monster",
    UnionEffectMonster = "Union Effect Monster",
    XYZMonster = "XYZ Monster",
}
