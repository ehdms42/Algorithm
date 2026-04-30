function solution(k, dungeons) {
    let max = 0;
    const visited = Array(dungeons.length).fill(false);

    function dfs(currentFatigue, count) {
        // 최대값 갱신
        max = Math.max(max, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [need, cost] = dungeons[i];

            // 방문했거나, 피로도 부족하면 스킵
            if (visited[i] || currentFatigue < need) continue;

            visited[i] = true;
            dfs(currentFatigue - cost, count + 1);
            visited[i] = false; // 백트래킹
        }
    }

    dfs(k, 0);

    return max;
}