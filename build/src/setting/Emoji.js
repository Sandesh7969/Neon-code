export default class OrasEmoji extends Object {
    constructor(client) {
        super();
        this.tick = "<a:tick_kastro:1191703538485702727>";
        this.cross = "<a:wrong_kastro:1191703733457911820>";
        this.playing = "<:music__kastro:1191703892438822913>";
        this.exclamation = "<:exclamation_kastro:1191704038681616466>";
        this.queue = "<:kronixqueue:1191704164171001876>";
        this.info = "<:exclamation_kastro:1191704038681616466>";
        this.defSearch = "<:TMF_YouTube:1191704501854425189>";
        this.premium = "<:event_kastro:1191704642351009823>";
        this.invite = "<:icons_invite:1191704777143373834>";
        this.support = "<:Support:1191705751228534784>";
        this.spotiSearch = "<a:spotify:1191705902118613092>";
        this.deezSearch = "<:Deezer_oras:1191706249109180568>";
        this.vote = "<:voter:1191706388024524810>";
        this.soundSearch = "<:Soundcloud_oras:1191706520640032788>";
        this.badges = {
            named: "<:owner:1191706635081621504>",
            owner: "<:ownership:1191706755785314445>",
            dev: "<a:developer_bot:1191706873615880273>",
            admin: "<:ny_Admin:1191706992797024277>",
            codev: "<:Active_Dev:1191707190378119190>",
            author: "",
            friend: "<:bsdk_friends:1191707379138572338>",
            vip: "<:dc_Vipz:1191707523112255529>",
            premiumUser: "<:event_kastro:1191704642351009823>",
            mod: "<:mod_badge:1191707743048974366>",
            staff: "<:Staff:1191707846719578192>",
            supporter: "<:earlysupporter:1191708021055836191>",
            user: "<:kronix_member:1191708016903471115>",
        };
        this.helpMenu = {
            music: "<:music__kastro:1191703892438822913>",
            home: "<:Home:1191708364019875932>",
            filters: "<:icons_control:1191708365949239368>",
            info: "<:exclamation_kastro:1191704038681616466>",
            utility: "<:settings:1191708779016900609>",
            allCommands: "<:icons_richpresence:1191708935351181372>",
        };
        this.setup = {
            pause: "<:ss_pause:1191873535828836425>",
            resume: "<:resume:1191874376501575744>",
            skip: "<:forward10:1191874380184178719>",
            previous: "<:Oras_Previous:1191874225137528873>",
            shuffle: "<:shuffle:1191874172914257950>",
            author: "<:icons_queue:1191875521856942181>",
            nowPlaying: "<:kronix_member:1191708016903471115>",
            requester: "<:kronix_member:1191708016903471115>",
            duration: "<:duration333:1191875453598830643>",
            stop: "<:ss_stop:1191876239309422636>",
            loop: "<:loop:1191876245173059745>",
            volLow: "<:lower_vol:1191876158556491887>",
            volHigh: "<:higher_vol:1191876110296821852>",
            fav: "<:discotoolsxyzicon8:1191876955843330189>",
            autoplay: "<:kronixqueue:1191704164171001876>",
            filters: "<:icons_control:1191708365949239368>",
        };
        this.orasNew = {
            emote: "<:music__kastro:1191703892438822913>",
            nowPlaying: "<:music__kastro:1191703892438822913>",
            requester: "<:kronix_member:1191708016903471115>",
            duration: "<:duration333:1191875453598830643>",
            author: "<:kronixqueue:1191704164171001876>",
            pause: "<:ss_pause:1191873535828836425>",
            resume: "<:resume:1129824021618380801>",
            skip: "<:forward10:1191874380184178719>",
            fav: "<:event_kastro:1191704642351009823>",
            previous: "<:Oras_Previous:1191874225137528873>",
            stop: "<:ss_stop:1191876239309422636>",
        };
        this.spotify = {
            emote: "<:music__kastro:1191703892438822913>",
            filters: "",
            nowPlaying: "<a:spotify:1191705902118613092>",
            requester: "<:kronix_member:1191708016903471115>",
            duration: "<:duration333:1191875453598830643>",
            pause: "<:ss_pause:1191873535828836425>",
            author: "<:kronixqueue:1191704164171001876>",
            resume: "<:resume:1191874376501575744>",
            stop: "<:ss_stop:1191876239309422636>",
            loop: "<:loop:1191876245173059745>",
            shuffle: "<:shuffle:1191874172914257950>",
            forward: "<:backward:1191881275351507015>",
            backward: "<:forward10:1191874380184178719>",
            volLow: "<:lower_vol:1191876158556491887>",
            volHigh: "<:higher_vol:1191876110296821852>",
            previous: "<:Oras_Previous:1191874225137528873>",
            skip: "<:forward10:1191874380184178719>",
        };
        this.special = {
            emote: "<:music__kastro:1191703892438822913>",
            nowPlaying: "<:music__kastro:1191703892438822913>",
            requester: "<:kronix_member:1191708016903471115>",
            duration: "<:duration333:1191875453598830643>",
            pause: "<:ss_pause:1191873535828836425>",
            author: "<:kronix_member:1191708016903471115>",
            resume: "<:resume:1191874376501575744>",
            stop: "<:ss_stop:1191876239309422636>",
            loop: "<:loop:1191876245173059745>",
            shuffle: "<:shuffle:1191874172914257950>",
            forward: "<:backward:1191881275351507015>",
            backward: "<:forward10:1191874380184178719>",
            volLow: "<:lower_vol:1191876158556491887>",
            volHigh: "<:higher_vol:1191876110296821852>",
            previous: "<:Oras_Previous:1191874225137528873>",
            skip: "<:forward10:1191874380184178719>",
        };
        this.noButtons = {
            emote: "<:music__kastro:1191703892438822913>",
            nowPlaying: "<:kronix_member:1191708016903471115>",
            author: "<:kronixqueue:1191704164171001876>",
            requester: "<:kronix_member:1191708016903471115>",
            duration: "<:duration333:1191875453598830643>",
            filters: "",
        };
        this.simple = {
            emote: "<:music__kastro:1191703892438822913>",
            nowPlaying: "<:kronix_member:1191708016903471115>",
            requester: "<:kronix_member:1191708016903471115>",
            author: "<:kronixqueue:1191704164171001876>",
            duration: "<:duration333:1191875453598830643>",
            filters: "",
            pause: "<:ss_pause:1191873535828836425>",
            resume: "<:resume:1191874376501575744>",
            stop: "<:ss_stop:1191876239309422636>",
            skip: "<:forward10:1191874380184178719>",
            loop: "<:loop:1191876245173059745>",
        };
        this.oldStyle = {
            emote: "<:music__kastro:1191703892438822913>",
            nowPlaying: "<:kronix_member:1191708016903471115>",
            author: "<:kronixqueue:1191704164171001876>",
            requester: "<:kronix_member:1191708016903471115>",
            duration: "<:duration333:1191875453598830643>",
        };
    }
}
//# sourceMappingURL=Emoji.js.map
