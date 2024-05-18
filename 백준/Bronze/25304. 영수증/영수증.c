#include <stdio.h>
int main()
{
	int total, tcnt, a, cnt, sum=0;
	scanf("%d", &total);
	scanf("%d", &tcnt);
	
	for(int i=1; i<=tcnt; i++){
		scanf("%d %d", &a, &cnt);
		sum+=a*cnt; 
	}
	
	if(total==sum){
		printf("Yes");
	}
	else printf("No");
	
	return 0;
	
}