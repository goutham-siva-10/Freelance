public class stringrotate{
    public static boolean isrotatedbytwoplaces(string1,string2){
        if(string1.length()!=string2.length()){
            return false;
        }
        int len=string1.
        String s1=string2.substring(len-2)+string2.substring(0,len-2);
        String s2=string2.substring(0,len-2)+string2.substring(len-2);
        if(string1==s1 || string1==s2){
            return true;
        }
        return false;
    }
    public static void main(String[] args){
        boolean res=isrotatedbytwoplaces(abcde,cdeab);
        if(res){
            System.out.println("satisfied");
        }
        else{
            System.out.println("Not Satisfied");
        }
    }
}