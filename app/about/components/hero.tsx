import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 bg-zinc-200 flex items-center">
      <div className="container">
       <h1 className="font-bold text-primary/50 text-4xl mb-5 lg:text-6xl">hero</h1> 
       <p className="text-muted-foreground mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis tempore suscipit illo numquam optio iure saepe quas debitis laborum sunt, neque, dolorum atque exercitationem fuga enim. Numquam exercitationem repudiandae corrupti.
        Obcaecati dolorem, ipsum hic exercitationem deserunt ex fuga nihil sit ab laudantium rerum temporibus assumenda at voluptatum voluptates repellendus non alias iure totam consequatur, quam enim doloremque eveniet blanditiis. Reprehenderit.
        Dolor doloribus veniam explicabo quasi earum! Et quidem dolores quod corporis error obcaecati deleniti voluptas, a mollitia beatae perspiciatis nihil harum dolore sunt rem laborum alias commodi quia ratione minus.
       </p>
       <Button>お問い合わせ</Button>
        </div>
    </div>
  );
}
